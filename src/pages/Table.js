import ComponentCard from "../components/Card";
import tHead from "../assets/js/tHead";
import tBody from "../assets/js/tBody";
import tAction from "../assets/js/tAction";
import { VITable } from "../lib";
const Table = () => {

  return (
    <>
        <ComponentCard title="Multi Use Datatable">
          <VITable  tableHead={tHead} tableBody={tBody} tableAction={tAction}/>
        </ComponentCard>
    </>
  )
};

export default Table;

// var viewHtml = <div>{'<VITable size="small" />'}</div>;
//   var viewSDesign = <VITable size="small" />;
//   var viewNDesign = <VITable  />;
//   var viewMDesign = <VITable size="medium" />;
//   var viewLDesign = <VITable size="large" />;
//   var viewStripDesign = <VITable type="strip"  />;
//   var viewoeDesign = <VITable type="oddeven"  />;
//   var viewvdDesign = <VITable type="vertical-divider"  />;

//   {/* <ComponentCard
//         title="Small"
//         display={viewHtml}>
//         {viewSDesign}
//       </ComponentCard>
//       <ComponentCard
//         title="Normal">
//         {viewNDesign}
//       </ComponentCard>
//       <ComponentCard
//         title="Medium">
//         {viewMDesign}
//       </ComponentCard>
//       <ComponentCard
//         title="Large">
//         {viewLDesign}
//       </ComponentCard>
//       <ComponentCard
//         title="Stripped">
//         {viewStripDesign}
//       </ComponentCard>
//       <ComponentCard
//         title="Odd Even">
//         {viewoeDesign}
//       </ComponentCard>
//       <ComponentCard
//         title="vertical Divider">
//         {viewvdDesign}
//       </ComponentCard> */}