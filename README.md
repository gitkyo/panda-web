# La plateforme web de Panda (Drupal 8)
![Panda](http://i.imgur.com/z4GLLwJ.gif  "Panda")

- Le répertoire "doc" contient toutes les instructions (configuration, instllation, gestion de la base...)
- Le répertoire "modules/custom" contient les modules personalisé.
- Les files, la base de donnée et le fichier "settings.local.php" ne sont pas versionnés -> Il faut les télécharger

# Démo
[http://213.32.18.30/panda-demo/](http://213.32.18.30/panda-demo/)

# Documentation
[Documentation officiel D8](https://www.drupal.org/docs/8)  
[Convention de nommage](https://www.drupal.org/node/318)  
[Drupal Bootstrap Documentation](http://drupal-bootstrap.org/api/bootstrap)


# Some tips

	- Voir les log apache : tail -f /var/log/apache2/error.log
	- Afficher le contenu d'une variable dans twig : <pre>{{  dump(infoFold5) }}</pre>
	- Charger une image avec un style prédéfinit depuis un uri : $myPicture = entity_load('image_style', '[nom_machine_du_style]')->buildUrl([uri_image]);
	- Requette simple : $query = db_query("[ma_requette_sql]]"); $titleFold4 = $query->fetchAll();
