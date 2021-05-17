Client.on("message", message => { // ne pas toucher 
        if (message.author.bot) return; // ne pas toucher 
        if (message.content == prefix + "nom de la commande") { // mettre le nom de la commande exemple ("help") help sera ajouter avec le prefix que vous donnerez a votre bot moi c'est ,help.

                var embed = new Discord.MessageEmbed()
                    .setTitle("titre") // titre pour l'embed
                    .setDescription("") //Description de L'embed
                    .setThumbnail("lien de l'image") // Grand logo a gouche de l'embed
                    .setAuthor("nom de l'auteur", "Lien de L'image") // Pour mettre un Auteure // // pas obligatoire de mettre l'image vous pouvez retirez le code (, "Lien de L'image") si vous voulez retirez l'image
                    .setColor("#000000") // Couleur pour trouver les couleur en # (https://htmlcolorcodes.com/fr/)
                    .setDescription("nom de") // Nom de la description. exemple ("Administration")
                    .addField("", "", false) // vous pouvez ajouter du texte grace a se code. pour mettre un espase vous mettez (\u200b) entre les "" du premier ou du deuxieme. et pour mettre d'autre texte vous rajouterez sous cette ligne se code .addField("", "") et si vous voulez que veaux ligne soit alignier vous metter .addField("", "", true)

                message.channel.send(embed); // ne pas toucher 
            }
        });


    // si vous voulez mettre que il a que les admin qui vois l'embed vous metter le code suivent.

    if (message.author.bot) return; // ne pas toucher 
    if (message.content == prefix + "nom de la commande") { // mettre le nom de la commande exemple ("help") help sera ajouter avec le prefix que vous donnerez a votre bot moi c'est ,help.
        if (message.member.hasPermission("ADMINISTRATOR")) {

            var embed = new Discord.MessageEmbed()
                .setTitle("titre") // titre pour l'embed
                .setDescription("") //Description de L'embed
                .setThumbnail("lien de l'image") // Grand logo a gouche de l'embed
                .setAuthor("nom de l'auteur", "Lien de L'image") // Pour mettre un Auteure // // pas obligatoire de mettre l'image vous pouvez retirez le code (, "Lien de L'image") si vous voulez retirez l'image
                .setColor("#000000") // Couleur pour trouver les couleur en # (https://htmlcolorcodes.com/fr/)
                .setDescription("nom de") // Nom de la description. exemple ("Administration")
                .addField("", "", false) // vous pouvez ajouter du texte grace a se code. pour mettre un espase vous mettez (\u200b) entre les "" du premier ou du deuxieme. et pour mettre d'autre texte vous rajouterez sous cette ligne se code .addField("", "") et si vous voulez que veaux ligne soit alignier vous metter .addField("", "", true)

            message.channel.send(embed); // ne pas toucher 
        }
    });
