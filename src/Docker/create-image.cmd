docker build --no-cache -f SQL\Dockerfile.PostgreSql -t soper/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t soper/app ../..
