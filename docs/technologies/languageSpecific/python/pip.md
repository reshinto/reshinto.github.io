# Handling PIP

## Create requirements file

&gt; `pip freeze > requirements.txt`

## Uninstall packages installed from requirements.txt

&gt; `pip uninstall -r requirements.txt -y`

## Uninstall all packages without any reference

&gt; `pip uninstall -y -r <(pip freeze)`
