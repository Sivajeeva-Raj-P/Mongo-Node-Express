
    let user = {
      fullname: "Sarah Johnson",
      welcomemessage: " Welcome to the new platform! Hope you enjoy your vacation.",

      // Define the method inside the object
      displaydetails: function () {
        console.log("First character of fullname:", this.fullname.charAt(0));

        console.log("Total number of characters in welcome message:", this.welcomemessage.length);

        console.log("First 15 characters (slice):", this.welcomemessage.slice(0, 15));

        console.log("First 15 characters (substring):", this.welcomemessage.substring(0, 15));

        console.log("Uppercase name:", this.fullname.toUpperCase());

        console.log("Lowercase welcome message:", this.welcomemessage.toLowerCase());

        console.log("Trimmed message:", this.welcomemessage.trim());

        console.log("First and last name as array:", this.fullname.split(" "));

        // Case-insensitive search for 'welcome'
        let pos = this.welcomemessage.toLowerCase().indexOf("welcome");
        console.log("Position of 'welcome':", pos);

        // Combine both strings using template literal
        let combined = `${this.fullname} says: "${this.welcomemessage.trim()}"`;
        console.log("Combined string:", combined);
      }
    };

    // Call the method
    user.displaydetails();
  
