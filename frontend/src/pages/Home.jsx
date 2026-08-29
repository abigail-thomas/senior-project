import { useState } from 'react'

function Home() {

    /* notes:
    - useState is when my component needs to remember something can change,
    it's not a static value, basically a var
    */

    let [city, setCity] = useState("");
    let [currency, setCurrency] = useState("USD");

    async function handleSubmit(e) {
        e.preventDefault();

        {/* api fetch in here w {city} and {currency} */}
        const res = await fetch(
            `http://127.0.0.1:8000/api/cost-of-living/?city=${city}&currency=${currency}`
        );
        const data = await res.json();

        console.log("city: ", city);
        console.log("currency: ", currency);

        console.log(data);
    }

    return (
        <div>
            <h1 className="text-center p-5 text-2xl">Cost of Living YAY</h1>

            {/* form for cities */}
            <div className="flex mx-auto p-4">
                <form className="mx-auto flex items-center gap-4" onSubmit={handleSubmit} action="">
                    <input
                       type="text"
                       placeholder="Enter city"
                       value={city}
                       onChange={(e) => setCity(e.target.value)}
                       required
                       className="w-full p-2 rounded outline-solid outline-gray-200  outline-1 bg-gray-100"
                    />
                    <select className="p-2 rounded outline-solid outline-gray-200  outline-1 bg-gray-100"
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

                    </select>
                    <button
                        type="submit"
                        className="border-solid p-2 rounded bg-blue-400 text-white cursor-pointer"
                    >Submit</button>

                </form>
            </div>

        </div>
    )
}

export default Home;