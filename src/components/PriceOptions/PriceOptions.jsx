import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
    const priceOptions = [
          {
            "id": "1",
            "name": "Basic Membership",
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Locker room access",
              "No commitment",
              "Access to free Wi-Fi",
              "Discounts on gym merchandise",
              "Monthly fitness assessment"
            ],
            "price": "$29.99 per month"
          },
          {
            "id": "2",
            "name": "Premium Membership",
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Access to group fitness classes",
              "Locker room access",
              "Personal trainer consultation",
              "12-month commitment",
              "Complimentary towel service",
              "Access to sauna and steam room"
            ],
            "price": "$49.99 per month"
          },
          {
            "id": "3",
            "name": "VIP Membership",
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Access to group fitness classes",
              "Locker room access with towel service",
              "Personal trainer consultation",
              "Nutrition counseling",
              "24/7 gym access",
              "No commitment",
              "Priority booking for classes",
              "Guest passes for friends and family"
            ],
            "price": "$79.99 per month"
          }
        ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl mb-5">Best Prices</h2>
            <div className="grid md:grid-cols-3 gap-6 p-6">
            {
                priceOptions.map(option=> <PriceOption key={option.id} option={option} ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;