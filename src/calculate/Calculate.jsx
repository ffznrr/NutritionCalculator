import { useState } from "react";

export default function CalculatePage() {
  const [selectedMakanan, setSelectedMakanan] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [nutritionInfo, setNutritionInfo] = useState(null);

  const jenisMakanan = [
    {
      id: 1,
      nama: "Salad",
      kalori: 150,
      karbohidrat: 50,
      fat: 0.3,
      protein: 50,
    },
    {
      id: 2,
      nama: "Apple",
      kalori: 20,
      karbohidrat: 30,
      fat: 0.4,
      protein: 20,
    },
    {
      id: 3,
      nama: "Banana",
      kalori: 96,
      karbohidrat: 27,
      fat: 0.3,
      protein: 1.3,
    },
    {
      id: 4,
      nama: "Chicken Breast",
      kalori: 165,
      karbohidrat: 0,
      fat: 3.6,
      protein: 31,
    },
    {
      id: 5,
      nama: "Rice",
      kalori: 130,
      karbohidrat: 28,
      fat: 0.3,
      protein: 2.7,
    },
    {
      id: 6,
      nama: "Milk",
      kalori: 42,
      karbohidrat: 5,
      fat: 1,
      protein: 3.4,
    },
    {
      id: 7,
      nama: "Egg",
      kalori: 155,
      karbohidrat: 1.1,
      fat: 11,
      protein: 13,
    },
    {
      id: 8,
      nama: "Cheese",
      kalori: 402,
      karbohidrat: 1.3,
      fat: 33,
      protein: 25,
    },
    {
      id: 9,
      nama: "Broccoli",
      kalori: 55,
      karbohidrat: 11,
      fat: 0.6,
      protein: 4.2,
    },
    {
      id: 10,
      nama: "Salmon",
      kalori: 208,
      karbohidrat: 0,
      fat: 13,
      protein: 20,
    },
  ];

  const calculateNutrition = () => {
    if (!selectedMakanan || !selectedQuantity || selectedQuantity <= 0) {
      alert("Please select a food and enter a valid quantity.");
      return;
    }

    const makanan = jenisMakanan.find(
      (item) => item.id === parseInt(selectedMakanan),
    );
    if (makanan) {
      const multiplier = selectedQuantity / 100;
      setNutritionInfo({
        kalori: (makanan.kalori * multiplier).toFixed(2),
        karbohidrat: (makanan.karbohidrat * multiplier).toFixed(2),
        fat: (makanan.fat * multiplier).toFixed(2),
        protein: (makanan.protein * multiplier).toFixed(2),
      });
    } else {
      setNutritionInfo(null);
    }
  };

  return (
    <>
      <div className="w-screen min-h-screen bg-[#5D8736] py-5 px-64">
        <h1 className="text-3xl text-center text-[#F4FFC3]">
          Calculate Food Nutrition
        </h1>
        <div className="w-full h-auto mt-10 bg-[#F4FFC3] rounded-xl p-5">
          <div className="w-full flex flex-col gap-5">
            <div>
              <label
                htmlFor="food"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Masukan Jenis Makanan :
              </label>
              <select
                id="food"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedMakanan}
                onChange={(e) => setSelectedMakanan(e.target.value)}
              >
                <option
                  value=""
                  disabled
                >
                  Pilih Jenis Makanan
                </option>
                {jenisMakanan.map((val) => (
                  <option
                    key={val.id}
                    value={val.id}
                  >
                    {val.nama}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Quantity (grams):
              </label>
              <input
                id="quantity"
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(e.target.value)}
                placeholder="Enter quantity in grams"
              />
            </div>

            <button
              onClick={calculateNutrition}
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Calculate Nutrition
            </button>
            {nutritionInfo && (
              <div className="mt-5 p-5 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-bold">Nutrition Information</h3>
                <p>
                  <strong>Calories:</strong> {nutritionInfo.kalori} kcal
                </p>
                <p>
                  <strong>Carbohydrates:</strong> {nutritionInfo.karbohidrat} g
                </p>
                <p>
                  <strong>Fat:</strong> {nutritionInfo.fat} g
                </p>
                <p>
                  <strong>Protein:</strong> {nutritionInfo.protein} g
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
