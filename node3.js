

        let customer = "Siva";
        let comment ="Warm,friendly and awesome Ambience!Great place for a relaxed dine-in experience.";
        let review = { name:customer ,
         customercomment:comment};


        function thankyou(){
            let upper = review.name.toUpperCase();
            let short = review.customercomment.substring(0,20);
            console.log(`Thank you for your review,${upper}!`);
            console.log(` Your comment:${short}`);
        }
        thankyou();
    

