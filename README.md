# SkeletonOpenShift
PostgreSQL 9.2 database added.  Please make note of these credentials:

   Root User: adminptu4kvn
   Root Password: uEQej-qqlvQS
   Database Name: blog

Connection URL: postgresql://$OPENSHIFT_POSTGRESQL_DB_HOST:$OPENSHIFT_POSTGRESQL_DB_PORT

# Properties
db.url=jdbc:postgresql://${OPENSHIFT_POSTGRESQL_DB_HOST}:${OPENSHIFT_POSTGRESQL_DB_PORT}/${OPENSHIFT_APP_NAME}
db.username=adminptu4kvn
db.password=uEQej-qqlvQS

#Command psql
\l - list database
\dt - list table database

#Logs
tail -f jbossews/logs/store-2016-05-08.0.log
Ctrl+c -> exit

