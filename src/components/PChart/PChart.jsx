import { Cell, Pie, PieChart } from "recharts";

const PChart = () => {

  const data01 = [
    {
      "name": "Group A",
      "value": 20,
      "color": "#65a30d"
    },
    {
      "name": "Group B",
      "value": 25,
      "color": "#f87171"
    },
    {
      "name": "Group C",
      "value": 55,
      "color": "#2563eb"
    }
  ];
  const data02 = [
    {
      "name": "Group D",
      "value": 19,
      "color": "#65a30d"
    },
    {
      "name": "Group E",
      "value": 31,
      "color": "#f87171"
    },
    {
      "name": "Group F",
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
        </PieChart>
      </div>
      </div>
    </div>
  );
};

export default PChart;