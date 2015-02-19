module.exports = Reporter;

function Reporter(runner) {
    var passes = 0;
    var failures = 0;

    runner.on('pass', function(test){
        passes++;
        console.log('pass: %s', test.fullTitle());
    });

    runner.on('fail', function(test, err){
        failures++;
        console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
    });

    runner.on('end', function(){
        console.log('11111');
        console.log('end: %d/%d', passes, passes + failures);
        process.exit(failures);
    });
}