1. Ensure gunicorn is installed
   &gt; pip install gunicorn
2. Ensure postgreSQL required libraries are installed
   &gt; pip install dj-database-url psycopg2-binary
3. Install whitenoise for static files

   &gt; pip install whitenoise

   - Add middleware and static_root to settings.py

   ```python
   MIDDLEWARE = [
       'whitenoise.middleware.WhiteNoiseMiddleware',
   ]

   # not required if creating django rest api
   PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

   STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
   ```

4. Ensure environment variables are preset in settings.py

   ```python
   SECRET_KEY = os.environ.get('SECRET_KEY')

   DEBUG = (os.environ.get('DEBUG_VALUE') == 'True')
   ```

5. Create Procfile
   &gt; vim Procfile
   - Add the following to Procfile
     - project name is the folder containing the settings.py
       &gt; web: gunicorn [project_name].wsgi --log-file -
   - example
     &gt; web: gunicorn experiment_project.wsgi --log-file -
6. Ensure pipfile or requirement.txt is already in project folder
7. Setup .gitignore file
8. Init with git, ignore if already done
   &gt; git init
9. Add and commit
   &gt; git add . && git commit -m "initial commit"
10. Login to Heroku
    &gt; heroku login
11. Create heroku project (project name will be the url)
    &gt; heroku create project_name
    - url will be https://project_name.herokuapp.com
    - if project_name is not given, random name will be given
12. Setup postgreSQL database
    - If database is automatically created, add the following to settings.py
    ```python
    DATABASES = {'default': dj_database_url.config(conn_max_age=600, ssl_require=True)}
    ```
13. Add allowed host in settings.py
    ```python
    ALLOWED_HOSTS = ['project_name.herokuapp.com']
    ```
    &gt; git add . && git commit -m "add allowed host"
14. Set buildpack to ensure heroku understands project setup (maybe not be required)
    &gt; heroku buildpacks:set heroku/python
15. Set heroku environment variables
    - view all configs
      &gt; heroku config
    - set environment variable
      - example 1
        &gt; heroku config:set DEBUG_VALUE='False'
      - example 2
        &gt; heroku config:set SECRET_KEY=xxx
    - generate new secret key if don't have
    ```python
    # use python 3
    import secrets
    print(secrets.token_hex(24))
    ```
16. Push to heroku
    &gt; git push heroku master
17. Use heroku BASH to create superuser and migrate
    - Run bash
      &gt; heroku run bash
    - Migrate
      &gt; python manage.py migrate
    - Create super user
      &gt; python manage.py createsuperuser
18. Open website
    &gt; heroku open
19. Check releases for version to rollback if required
    &gt; heroku releases
20. Rollback if neccessary
    &gt; heroku rollback vxxx
    - example
      &gt; heroku rollback v2
