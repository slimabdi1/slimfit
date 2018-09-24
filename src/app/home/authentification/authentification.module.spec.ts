import { AuthentificationModule } from './authentification.module';

describe('AuthentificationModule', () => {
  let authentificationModule: AuthentificationModule;

  beforeEach(() => {
    authentificationModule = new AuthentificationModule();
  });

  it('should create an instance', () => {
    expect(authentificationModule).toBeTruthy();
  });
});
