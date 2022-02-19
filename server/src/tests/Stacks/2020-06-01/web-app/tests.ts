import { StacksService20200601 } from '../../../../stacks/2020-06-01/service/StackService';
import {
  validateAllStackLength,
  validateWindowsStacks,
  validateLinuxStacks,
  validateNotHiddenStacks,
  validateNotDeprecatedStacks,
  validateNotPreviewStacks,
  validateASPInStacks,
  validateASPFilter,
  validateNodeInStacks,
  validateNodeFilter,
  validatePythonInStacks,
  validatePythonFilter,
  validatePHPInStacks,
  validatePHPFilter,
  validateDotnetCoreInStacks,
  validateDotnetCoreFilter,
  validateRubyInStacks,
  validateRubyFilter,
  validateJavaInStacks,
  validateJavaFilter,
  validateJavaContainersInStacks,
  validateJavaContainersFilter,
  validateStaticSiteInStacks,
  validateStaticSiteFilter,
} from './validations';

const stacksService = new StacksService20200601();

describe('WebApp Stacks Test 2020-06-01', () => {
  // Test length of all stacks
  describe('Test all stack length', () => {
    it('should validate all stacks are returned', done => {
      const stacks = stacksService.getWebAppStacks();
      validateAllStackLength(stacks);
      done();
    });
  });

  // Test length of windows stacks
  describe('Test windows stack length', () => {
    it('should validate all stacks with windows are returned', done => {
      const stacks = stacksService.getWebAppStacks('windows');
      validateWindowsStacks(stacks);
      done();
    });
  });

  // Test length of linux stacks
  describe('Test linux stack length', () => {
    it('should validate all stacks with linux are returned', done => {
      const stacks = stacksService.getWebAppStacks('linux');
      validateLinuxStacks(stacks);
      done();
    });
  });

  // Test length of not hidden stacks
  describe('Test remove hidden stacks', () => {
    it('should validate no stacks with hidden are returned', done => {
      const stacks = stacksService.getWebAppStacks(undefined, undefined, true);
      validateNotHiddenStacks(stacks);
      done();
    });
  });

  // Test length of not deprecated stacks
  describe('Test remove deprecated stacks', () => {
    it('should validate no stacks with deprecated are returned', done => {
      const stacks = stacksService.getWebAppStacks(undefined, undefined, undefined, true);
      validateNotDeprecatedStacks(stacks);
      done();
    });
  });

  // Test length of not preview stacks
  describe('Test remove preview stacks', () => {
    it('should validate no stacks with preview are returned', done => {
      const stacks = stacksService.getWebAppStacks(undefined, undefined, undefined, undefined, true);
      validateNotPreviewStacks(stacks);
      done();
    });
  });

  // Test ASP stack
  describe('Test the ASP stack', () => {
    it('should validate the ASP stack', done => {
      const stacks = stacksService.getWebAppStacks();
      validateASPInStacks(stacks);
      done();
    });
  });

  // Test ASP stack filter
  describe('Test the ASP stack filter', () => {
    it('should validate the ASP stack filter', done => {
      const stacks = stacksService.getWebAppStacks(undefined, 'aspnet');
      validateASPFilter(stacks);
      done();
    });
  });

  // Test Node stack
  describe('Test the Node stack', () => {
    it('should validate the Node stack', done => {
      const stacks = stacksService.getWebAppStacks();
      validateNodeInStacks(stacks);
      done();
    });
  });

  // Test Node stack filter
  describe('Test the Node stack filter', () => {
    it('should validate the Node stack filter', done => {
      const stacks = stacksService.getWebAppStacks(undefined, 'node');
      validateNodeFilter(stacks);
      done();
    });
  });

  // Test Python stack
  describe('Test the Python stack', () => {
    it('should validate the Python stack', done => {
      const stacks = stacksService.getWebAppStacks();
      validatePythonInStacks(stacks);
      done();
    });
  });

  // Test Python stack filter
  describe('Test the Python stack filter', () => {
    it('should validate the Python stack filter', done => {
      const stacks = stacksService.getWebAppStacks(undefined, 'python');
      validatePythonFilter(stacks);
      done();
    });
  });

  // Test PHP stack
  describe('Test the PHP stack', () => {
    it('should validate the PHP stack', done => {
      const stacks = stacksService.getWebAppStacks();
      validatePHPInStacks(stacks);
      done();
    });
  });

  // Test PHP stack filter
  describe('Test the PHP stack filter', () => {
    it('should validate the PHP stack filter', done => {
      const stacks = stacksService.getWebAppStacks(undefined, 'php');
      validatePHPFilter(stacks);
      done();
    });
  });

  // Test .NET Core stack
  describe('Test the .NET Core stack', () => {
    it('should validate the .NET Core stack', done => {
      const stacks = stacksService.getWebAppStacks();
      validateDotnetCoreInStacks(stacks);
      done();
    });
  });

  // Test .NET Core stack filter
  describe('Test the .NET Core stack filter', () => {
    it('should validate the .NET Core stack filter', done => {
      const stacks = stacksService.getWebAppStacks(undefined, 'dotnetcore');
      validateDotnetCoreFilter(stacks);
      done();
    });
  });

  // Test Ruby stack
  describe('Test the Ruby stack', () => {
    it('should validate the Ruby stack', done => {
      const stacks = stacksService.getWebAppStacks();
      validateRubyInStacks(stacks);
      done();
    });
  });

  // Test Ruby stack filter
  describe('Test the Ruby stack filter', () => {
    it('should validate the Ruby stack filter', done => {
      const stacks = stacksService.getWebAppStacks(undefined, 'ruby');
      validateRubyFilter(stacks);
      done();
    });
  });

  // Test Java stack
  describe('Test the Java stack', () => {
    it('should validate the Java stack', done => {
      const stacks = stacksService.getWebAppStacks();
      validateJavaInStacks(stacks);
      done();
    });
  });

  // Test Java stack filter
  describe('Test the Java stack filter', () => {
    it('should validate the Java stack filter', done => {
      const stacks = stacksService.getWebAppStacks(undefined, 'java');
      validateJavaFilter(stacks);
      done();
    });
  });

  // Test Java Containers stack
  describe('Test the Java Containers stack', () => {
    it('should validate the Java Containers stack', done => {
      const stacks = stacksService.getWebAppStacks();
      validateJavaContainersInStacks(stacks);
      done();
    });
  });

  // Test Java Containers stack filter
  describe('Test the Java Containers stack filter', () => {
    it('should validate the Java Containers stack filter', done => {
      const stacks = stacksService.getWebAppStacks(undefined, 'javacontainers');
      validateJavaContainersFilter(stacks);
      done();
    });
  });

  // Test Static Site stack
  describe('Test the Static Site stack', () => {
    it('should validate the Static Site stack', done => {
      const stacks = stacksService.getWebAppStacks();
      validateStaticSiteInStacks(stacks);
      done();
    });
  });

  // Test Static Site stack filter
  describe('Test the Static Site stack filter', () => {
    it('should validate the Static Site stack filter', done => {
      const stacks = stacksService.getWebAppStacks(undefined, 'staticsite');
      validateStaticSiteFilter(stacks);
      done();
    });
  });
});
