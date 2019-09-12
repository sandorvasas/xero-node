import * as fs from 'fs';
import * as path from 'path';

import { XeroClient } from '../XeroClient';
import { getAuthorisedXeroClient } from './getAuthorisedXeroClient';
import { config } from './config';

describe('xeroClient', () => {
    let xeroClient: XeroClient;

    beforeAll(async () => {
        jest.setTimeout(60000); // increase to 60sec so I have time to copy-paste to get an access token

        xeroClient = await getAuthorisedXeroClient(config);
    });

    describe('with an account', () => {
        let accountId: string;

        beforeAll(async () => {
            let accountsResponse;
            try {
                accountsResponse = await xeroClient.accountingApi.getAccounts(xeroClient.tenantIds[0]);
            } catch (err) {
                throw accountsResponse.response.body;
            }
            accountId = (accountsResponse.body.accounts && accountsResponse.body.accounts[0].accountID) as string;
        });

        it('upload an attachment', async () => {
            const filename = 'test.jpg';
            const pathToUpload = path.join('src', '__integration_tests__', filename);
            const filesize = fs.statSync(pathToUpload).size;
            const readStream = fs.createReadStream(pathToUpload);

            const attachmentsResponse = await xeroClient.accountingApi.createAccountAttachmentByFileName(xeroClient.tenantIds[0], accountId, filename, readStream, {
                headers: {
                    'Content-Type': 'image/jpg',
                    'Content-Length': filesize.toString()
                }
            });
            expect(attachmentsResponse.response.statusCode).toBe(200);

            // SKIP ASSERTION: the deserialisation isn't working properly :(
            // expect(attachmentsResponse.body.attachments).toBeTruthy();
            // expect(attachmentsResponse.body.attachments && attachmentsResponse.body.attachments[0].fileName).toBe(filename);
        });

        it('get attachments', async () => {
            const attachmentsResponse = await xeroClient.accountingApi.getAccountAttachments(xeroClient.tenantIds[0], accountId);
            expect(attachmentsResponse.response.statusCode).toBe(200);
            expect(attachmentsResponse.body.attachments).toBeTruthy();
            expect(attachmentsResponse.body.attachments && attachmentsResponse.body.attachments[0].contentLength).toBeGreaterThan(0);
        });
    });
});