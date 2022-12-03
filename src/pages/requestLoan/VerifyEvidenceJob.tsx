
import  {useWatch} from "react-hook-form"
import CheckBox from "../../components/CheckBox";
import { evidenceOption } from "./data";
interface props {
  control:any
}
const VerifyEvidenceJob = ({ control}: props) => {
  const job = useWatch({
    control,
    name: "job",
  });
  return (
    <div className="self-center">
      {evidenceOption.map((item: any, index: any) => {
        if (job&&item.value === job.value) {
          return (
            <div key={index}>
              <CheckBox
               
                control={control}
                name="VerifyEvidenceJob"
                label={item.label}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default VerifyEvidenceJob;
