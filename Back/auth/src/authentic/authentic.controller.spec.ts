import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticController } from './authentic.controller';

describe('AuthenticController', () => {
  let controller: AuthenticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticController],
    }).compile();

    controller = module.get<AuthenticController>(AuthenticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
