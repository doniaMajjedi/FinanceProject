import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticService } from './authentic.service';

describe('AuthenticService', () => {
  let service: AuthenticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthenticService],
    }).compile();

    service = module.get<AuthenticService>(AuthenticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
