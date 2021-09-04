import {log4jsconfig} from '../config/log4jsconfig'

export class Helper {

    static logsData(data: string) {
        log4jsconfig.Log().debug(data)
    }

}