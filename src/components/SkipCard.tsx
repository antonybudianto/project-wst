import { Truck, Loader as Road, HardHat, Calendar, MapPin } from "lucide-react";
import { Data } from "../@types/data";

function SkipCard({
  data,
  onSelect
}: {
  data: Data;
  onSelect: (data: Data) => void;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-50 p-4 border-b border-blue-100">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-blue-900">
            {data.size} Yard Skip
          </h2>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {data.size} yards
          </span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-blue-500" />
            <span className="ml-2 text-gray-700">
              Hire Period: {data.hire_period_days} days
            </span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-red-500" />
            <span className="ml-2 text-gray-700">
              {data.area ? `${data.area} (${data.postcode})` : data.postcode}
            </span>
          </div>
        </div>

        <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Base Price:</span>
            <span className="font-medium">£{data.price_before_vat}</span>
          </div>
          {data.transport_cost && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Transport:</span>
              <span className="font-medium">£{data.transport_cost}</span>
            </div>
          )}
          {data.per_tonne_cost && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Per Tonne:</span>
              <span className="font-medium">£{data.per_tonne_cost}</span>
            </div>
          )}
          <div className="flex justify-between items-center pt-2 border-t border-gray-200">
            <span className="text-gray-800 font-medium">Total (inc. VAT):</span>
            <span className="text-lg font-bold text-blue-600">
              £{(data.price_before_vat * (1 + data.vat / 100)).toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <div
            className={`flex items-center px-3 py-1 rounded-full text-sm ${
              data.allowed_on_road
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            <Road className="w-4 h-4 mr-1" />
            {data.allowed_on_road ? "Road Legal" : "Not Road Legal"}
          </div>
          <div
            className={`flex items-center px-3 py-1 rounded-full text-sm ${
              data.allows_heavy_waste
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            <HardHat className="w-4 h-4 mr-1" />
            {data.allows_heavy_waste ? "Heavy Waste OK" : "Light Waste Only"}
          </div>
          <div className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            <Truck className="w-4 h-4 mr-1" />
            Transport {data.transport_cost ? "Available" : "Not Available"}
          </div>
        </div>

        <button
          onClick={() => onSelect(data)}
          className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
        >
          Select Equipment
        </button>
      </div>
    </div>
  );
}

export default SkipCard;
