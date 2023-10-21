// Defined the ContentItem class
class ContentItem {
    constructor(id, name, description, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }

    updateContentItem(id, name, description, category) {
        if (id === this.id) {
            if (name !== null) {
                this.name = name;
            }
            if (description !== null) {
                this.description = description;
            }
            if (category !== null) {
                this.category = category;
            }
        }
    }

    toString() {
        return `<div id="content-item-${this.id}">
            <h4>${this.name}</h4>
            <p>${this.description}</p>
            <div>${this.category}</div>
        </div>`;
    }
}

// Created an array of content items
const contentItems = [
    new ContentItem(0, "Gloves", "Work Safety Gloves", "Safety"),
    new ContentItem(1, "Hard Hemelet", "Yellow hard hemelet", "Safety"),
    new ContentItem(2, "Plastic hand gloves", "Subway hand Gloves", "Food safety"),
    new ContentItem(3, "Safety jacket", "Radian Yellow jacket", "Road Safety"),
    new ContentItem(4, "Mobile Cover", "Black mobile cover", "Phone accessories"),
];

// Added content items to the page using jQuery
$(document).ready(function () {
    const $contentList = $("#content-item-list");
    
    contentItems.forEach((item) => {
        const $contentItem = $(item.toString());
        
        // Apply styling to each content item
        $contentItem.css({
            border: "2.5px solid #ddd0dd",
            width: "300px",
            padding: "15px",
            margin: "10px auto",
        });
        
        $contentList.append($contentItem);
        const themeTitle = "Market Place"; 
        $("#content h2").text(themeTitle);
    });
});