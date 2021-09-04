"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log4jsconfig = void 0;
class log4jsconfig {
    static Log() {
        var log4js = require('log4js');
        log4js.configure('./config/log4js.json');
        //var logger = log4js.getLogger(); //for both console and file
        let log = log4js.getLogger("default");
        return log;
    }
}
exports.log4jsconfig = log4jsconfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29uZmlnL2xvZzRqc2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBRSxNQUFhLFlBQVk7SUFFdkIsTUFBTSxDQUFDLEdBQUc7UUFDTixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3pDLDhEQUE4RDtRQUM5RCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKO0FBVEMsb0NBU0QifQ==