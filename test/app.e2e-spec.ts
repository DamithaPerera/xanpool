import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('fixer API (e2e)', () => {
    it('user should be able to get the currency rates', async () => {
      const response = await request(app.getHttpServer())
        .get('/v1/fixer?base=USD&symbols=HKD')
        .expect(200);
      expect(response.body).toBeDefined();
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('success');
      expect(response.body).toHaveProperty('data');
      expect(response.body.data).toHaveProperty('base');
      expect(response.body.data).toHaveProperty('date');
      expect(response.body.data).toHaveProperty('rates');
    });
  });
});
