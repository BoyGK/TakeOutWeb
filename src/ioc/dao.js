var ioc = {
		conf : {
            type : "org.nutz.ioc.impl.PropertiesProxy",
            fields : {
                paths : ["custom/"]
            }
        },
        dataSource : {
            type : "com.alibaba.druid.pool.DruidDataSource",
            events : {
                create : "init",
                depose : 'close'
            },
            fields : {
                url : "jdbc:mysql://127.0.0.1:3306/takeoutweb?useUnicode=true&characterEncoding=UTF8",
                username : "root",
                password : "",
                testWhileIdle : true, 
                validationQuery : "select 1" ,
                maxActive : 100
            }
        },
        dao : {
            type : "org.nutz.dao.impl.NutDao",
            args : [{refer:"dataSource"}]
        }
};