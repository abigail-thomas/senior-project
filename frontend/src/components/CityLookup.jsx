import { useState } from 'react'

function CityLookup() {

    /* notes:
    - useState is when my component needs to remember something can change,
    it's not a static value, basically a var
    */

    let [city, setCity] = useState("");
    let [currency, setCurrency] = useState("USD");
    let [results, setResults] = useState(null);
    let [hasSearched, setHasSearched] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        {/* api fetch in here w {city} and {currency} */}
        const res = await fetch(
            `http://127.0.0.1:8000/api/cost-of-living/?city=${city}&currency=${currency}`
        );
        const data = await res.json();

        setResults(data);

        setHasSearched(true);

        console.log("city: ", city);
        console.log("currency: ", currency);

        console.log(data);
    }

    return (
        <div className="bg-bg font-gabarito">
            <h1 className="  text-center p-5 text-4xl">Cost of Living</h1>

            {/* form for cities */}
            <div className="mx-auto p-4">
                <form className="grid grid-row grid-cols-4 xl:w-[50%] mx-auto items-center gap-4" onSubmit={handleSubmit} action="">
                    <input
                        type="text"
                        placeholder="Enter city (e.g. 'Tampa', 'London', 'Kyoto')"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        className="row-1 col-span-4 w-full p-4 rounded-xl bg-white"
                    />
                    {/* style this later w a plugin or somethign i think */}
                    <select className="row-2 col-span-2 p-2 rounded-xl bg-white"
                            name="currency"
                            id="currency"
                            value={currency}
                            onChange={(event) => setCurrency(event.target.value)}
                    >
                        <option value="USD">$USD - US Dollar</option>
                        <option value="EUR">€EUR - Euro</option>
                        <option value="GBP">£GBP - British Pound</option>
                        <option value="JPY">¥JPY - Japanese Yen</option>
                        <option value="CAD">$CAD - Canadian Dollar</option>
                        <option value="THB">฿THB - Thai Baht</option>


                    </select>
                    <button
                        type="submit"
                        className="row-2 col-span-2 btn"
                    >Analyze Costs</button>

                </form>

            </div>

            {results && (
                <pre>
                {JSON.stringify(results, null, 2)}
                </pre>
            )}

        </div>
    )
}

export default CityLookup;