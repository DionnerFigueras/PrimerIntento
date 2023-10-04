const os = require('os');

console.table({

    Start_time: os.uptime(),
    Plataform: os.platform(),
    TotalMemory: os.totalmem(),
    FreeMemory: os.freemem()
});