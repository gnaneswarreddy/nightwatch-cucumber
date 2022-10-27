module.exports = {
  src_folders : ["./step-definitions"],
  page_objects_path: ["./page_objects/"],

  test_workers: {
    enabled: true,
  },

  test_runner: {
    // set cucumber as the runner
    type: 'cucumber',  
      
    // define cucumber specific options  
    options: {
      //set the feature path
      feature_path: './features/*.feature',
      
      // start the webdriver session automatically (enabled by default)
      auto_start_session: true,
    
      // use parallel execution in Cucumber  
      // parallel: 2 // set number of workers to use (can also be defined in the cli as --parallel 2
    }
  },
  // default setting of the single test
  test_settings: {
    default: {
      disable_error_log: false,

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName : 'chrome'
      },
      webdriver: {
        start_process: true,
        port: 4444,
        server_path: require('chromedriver').path,
        cli_args: [
        ]
      },
    },
  }
};
