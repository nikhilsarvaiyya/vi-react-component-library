import ComponentCard from "../components/Card";
import { VIButton } from "../lib";


const Button = () => {
  let arr = ['red', 'green', 'blue', 'orange', 'black', 'yellow', 'brown', 'gray'];

  var viewHtml = arr.map((item, i) => <div>{'<VIButton key="' + i + '" color="' + item + '"/>'}</div>);
  var viewDesign = arr.map((item, i) => <VIButton key={i} color={item} />);

  var viewSmallDesign = arr.map((item, i) => <VIButton key={i} color={item} size="small"/>);
  var viewNormalDesign = arr.map((item, i) => <VIButton key={i} color={item} />);
  var viewMediumDesign = arr.map((item, i) => <VIButton key={i} color={item} size="medium"/>);
  var viewLargeDesign = arr.map((item, i) => <VIButton key={i} color={item} size="large" />);


  return (
    <>


      <ComponentCard
        title="Default Button"
        display={viewHtml}>
        {viewDesign}
      </ComponentCard>

      <ComponentCard title="Small Size">
        {viewSmallDesign}
      </ComponentCard>
      
      {/* <ComponentCard title="Default Size">
        {viewNormalDesign}
      </ComponentCard> */}

      <ComponentCard title="Medium Size">
        {viewMediumDesign}
      </ComponentCard>

      <ComponentCard title="Large Size">
        {viewLargeDesign}
      </ComponentCard>

    </>
  )
};

export default Button;