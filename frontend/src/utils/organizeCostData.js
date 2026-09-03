function parseCost(value) {
    if (value === "" || value == null) {
        return null;
    }
    return Number(String(value).replace(/,/g, ""));
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Whole-word/phrase matching instead of raw .includes(), so a keyword like
// "rice" can't accidentally match inside an unrelated word like "price".
function hasKeyword(itemName, keywords) {
    return keywords.some((kw) =>
        new RegExp(`\\b${escapeRegex(kw)}\\b`, "i").test(itemName)
    );
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
            hasKeyword(itemName, [
                "restaurant", "mcdonald", "cappuccino", "soft drink",
                "bottled water", "milk", "bread", "rice", "eggs", "cheese",
                "chicken", "beef", "apples", "bananas", "oranges", "tomatoes",
                "potatoes", "onions", "lettuce",
                // alcohol counts as food/drink per project decision; tobacco does not
                "beer", "wine"
            ])
        ) {
            organizedItem.category = "food";
            organizedData.categories.food.push(organizedItem);
        }
        else if (
            hasKeyword(itemName, ["transport", "taxi", "gasoline", "car"])
        ) {
            organizedItem.category = "transportation";
            organizedData.categories.transportation.push(organizedItem);
        }
        else if (
            // utilities is checked before the broader "apartment" housing match below,
            // so an item like "Basic Utilities for 915 Square Feet Apartment" lands here, not in housing
            hasKeyword(itemName, ["utilities", "mobile phone", "internet", "broadband"])
        ) {
            organizedItem.category = "utilities";
            organizedData.categories.utilities.push(organizedItem);
        }
        else if (
            hasKeyword(itemName, ["apartment", "mortgage"])
        ) {
            organizedItem.category = "housing";
            organizedData.categories.housing.push(organizedItem);
        }
        else if (
            hasKeyword(itemName, ["fitness", "tennis", "cinema"])
        ) {
            organizedItem.category = "entertainment";
            organizedData.categories.entertainment.push(organizedItem);
        }
        else if (
            hasKeyword(itemName, ["preschool", "primary school", "school"])
        ) {
            organizedItem.category = "education";
            organizedData.categories.education.push(organizedItem);
        }
        else if (
            hasKeyword(itemName, ["jeans", "dress", "running shoes", "business shoes"])
        ) {
            organizedItem.category = "clothing";
            organizedData.categories.clothing.push(organizedItem);
        }
        else if (
            hasKeyword(itemName, ["salary"])
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