function parseCost(value) {
    if (value === "" || value == null) {
        return null;
    }
    return Number(String(value).replace(/,/g, ""));
}

function organizeCostData(data) {
    const organizedData = {
        city: data.city,
        currency: data.currency,
        categories: {
            food: [],
            transportation: [],
            housing: [],
            utilities: [],
            entertainment: [],
            education: [],
            clothing: [],
            financial: [],
            other: []
        }
    };

    data.costs.forEach((item) => {
        const itemName = item.item.toLowerCase();
        const organizedItem = {
            item: item.item,
            cost: parseCost(item.cost),
            range: {
                low: parseCost(item.range.low),
                high: parseCost(item.range.high)
            }
        };

        if (
            itemName.includes("restaurant") ||
            itemName.includes("mcdonald") ||
            itemName.includes("cappuccino") ||
            itemName.includes("soft drink") ||
            itemName.includes("bottled water") ||
            itemName.includes("milk") ||
            itemName.includes("bread") ||
            itemName.includes("rice") ||
            itemName.includes("eggs") ||
            itemName.includes("cheese") ||
            itemName.includes("chicken") ||
            itemName.includes("beef") ||
            itemName.includes("apples") ||
            itemName.includes("bananas") ||
            itemName.includes("oranges") ||
            itemName.includes("tomatoes") ||
            itemName.includes("potatoes") ||
            itemName.includes("onions") ||
            itemName.includes("lettuce") ||
            // alcohol counts as food/drink per project decision; tobacco does not
            itemName.includes("beer") ||
            itemName.includes("wine")
        ) {
            organizedItem.category = "food";
            organizedData.categories.food.push(organizedItem);
        }
        else if (
            itemName.includes("transport") ||
            itemName.includes("taxi") ||
            itemName.includes("gasoline") ||
            itemName.includes("car")
        ) {
            organizedItem.category = "transportation";
            organizedData.categories.transportation.push(organizedItem);
        }
        else if (
            // utilities is checked before the broader "apartment" housing match below,
            // so an item like "Basic Utilities for 915 Square Feet Apartment" lands here, not in housing
            itemName.includes("utilities") ||
            itemName.includes("mobile phone") ||
            itemName.includes("internet") ||
            itemName.includes("broadband")
        ) {
            organizedItem.category = "utilities";
            organizedData.categories.utilities.push(organizedItem);
        }
        else if (
            itemName.includes("apartment") ||
            itemName.includes("mortgage")
        ) {
            organizedItem.category = "housing";
            organizedData.categories.housing.push(organizedItem);
        }
        else if (
            itemName.includes("fitness") ||
            itemName.includes("tennis") ||
            itemName.includes("cinema")
        ) {
            organizedItem.category = "entertainment";
            organizedData.categories.entertainment.push(organizedItem);
        }
        else if (
            itemName.includes("preschool") ||
            itemName.includes("primary school") ||
            itemName.includes("school")
        ) {
            organizedItem.category = "education";
            organizedData.categories.education.push(organizedItem);
        }
        else if (
            itemName.includes("jeans") ||
            itemName.includes("dress") ||
            itemName.includes("running shoes") ||
            itemName.includes("business shoes")
        ) {
            organizedItem.category = "clothing";
            organizedData.categories.clothing.push(organizedItem);
        }
        else if (
            itemName.includes("salary")
        ) {
            organizedItem.category = "financial";
            organizedData.categories.financial.push(organizedItem);
        }
        else {
            // tobacco (e.g. "Cigarettes") intentionally falls through to "other"
            organizedItem.category = "other";
            organizedData.categories.other.push(organizedItem);
        }
    });

    return organizedData;
}

export default organizeCostData;