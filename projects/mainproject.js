let users = [
    {
        name: "Aarav Sharma",
        pic: "https://images.unsplash.com/photo-1783881214885-fe945508df5b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
        bio: "Frontend developer who loves creating responsive and modern web interfaces."
    },
    {
        name: "Priya Mehta",
        pic: "https://images.unsplash.com/photo-1784667597752-f9c7862527a8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
        bio: "UI/UX designer passionate about building simple and user-friendly experiences."
    },
    {
        name: "Rohan Das",
        pic: "https://images.unsplash.com/photo-1783990901858-59d849c532d6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
        bio: "Machine learning enthusiast who enjoys solving real-world problems with AI."
    },
    {
        name: "Sneha Roy",
        pic: "https://images.unsplash.com/photo-1784088913006-3683757abeca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Backend developer experienced in Node.js, Express, and MongoDB."
    },
    {
        name: "Kabir Singh",
        pic: "https://images.unsplash.com/photo-1784296868170-3874a58217f2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Cybersecurity learner exploring ethical hacking and network security."
    },
    {
        name: "Ananya Sen",
        pic: "https://images.unsplash.com/photo-1784697335149-6081d07b1575?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
        bio: "Full-stack developer who enjoys building scalable web applications and learning new technologies."
    }
];


function showusers(arr){
    arr.forEach(function(user){
        
        let body = document.body;

        let mainDiv = document.createElement("div");
        mainDiv.className = "flex flex-col gap-10 items-center";

        let cardContainer = document.createElement("div");
        cardContainer.className = "flex gap-10";

        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.className = "bg-img";
        img.src = user.pic;
        img.alt = "void";

        let blurredLayer = document.createElement("div");
        blurredLayer.className = "blurred-layer";
        blurredLayer.style.backgroundImage=`url(${user.pic})`;

        let content = document.createElement("div");
        content.className = "content";

        let heading = document.createElement("h3");
        heading.textContent = user.name;

        let para = document.createElement("p");
        para.textContent = user.bio;

        // Append elements
        content.appendChild(heading);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        cardContainer.appendChild(card);

        mainDiv.appendChild(input);
        mainDiv.appendChild(cardContainer);

        body.appendChild(mainDiv);
    })
}
showusers(users)

