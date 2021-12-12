import '../../App.css';
import LineChart1 from '../partials/LineChart1'
import AreaChart1 from '../partials/AreaChart1'
import PieChart1 from '../partials/PieChart1'
import PieChart2 from '../partials/PieChart2'


export default function Projects() {

  return (
      <div>
        <h1>Projects</h1>
        <p>Nina and Finn have a keen interest in data viz, just like their owner.</p>
        <h3>Daily Energy levels</h3>
        <LineChart1 />
        <h3>Human step count per dog per walk</h3>
        <AreaChart1 />
        <h3 className="dna-header">Dog DNA results</h3>
        <PieChart1 />
        <PieChart2 />
      </div>
  );
}
