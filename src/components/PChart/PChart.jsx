import { Cell, Pie, PieChart, Tooltip } from "recharts";

const PChart = () => {

  const data01 = [
    {
      "name": "Male 21-45",
      "value": 20,
      "color": "#65a30d"
    },
    {
      "name": "Male 65+",
      "value": 25,
      "color": "#f87171"
    },
    {
      "name": "Others",
      "value": 55,
      "color": "#2563eb"
    }
  ];
  const data02 = [
    {
      "name": "Female 18-24",
      "value": 19,
      "color": "#65a30d"
    },
    {
      "name": "Female 55+",
      "value": 31,
      "color": "#f87171"
    },
    {
      "name": "Others",
      "value": 50,
      "color": "#2563eb"
    }
  ]

  return (
    <div className="bg-white m-16 p-6">
      <div className="md:flex justify-center items-center h-screen">
      <div>
        <h2 className="text-center font-extrabold text-xl text-black">Male Membership by age</h2>
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" fill={`color`} cx={200} cy={200} outerRadius={90} label>
            {
              data01.map((entry, idx)=> (<Cell key={idx} fill={entry.color}></Cell>))
            }
          </Pie>
          <Tooltip/>
        </PieChart>
      </div>
      <div>
        <h2 className="text-center font-extrabold text-xl text-black">Female Membership by age</h2>
        <PieChart width={400} height={400}>
          <Pie data={data02} dataKey="value" cx={200} cy={200} outerRadius={90} label>
            {
              data02.map((entry, idx)=> (<Cell key={idx} fill={entry.color}></Cell>))
            }
          </Pie>
          <Tooltip/>
        </PieChart>
      </div>
      </div>
    </div>
  );
};

export default PChart;