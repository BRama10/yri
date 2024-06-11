'use client';

import { Skeleton, CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { FairData, FairNodeProps, PathData, StaticPath } from '@/app/meta'
import { parseLocationString } from "@/utils";
import { FairNode } from "@/components/node";
import { StatComponent } from "@/components/statcomponent";
import { ChartComponent } from "@/components/chart";
import { Menu } from "@/components/menu";

import { useRouter } from 'next/navigation'


export default function FindAFair({ countyData, fairData }: { countyData: { [key: string]: string[] }; fairData: any }) {
  const [isCountyListLoading, setCountyListLoading] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [pathChange, setPathChange] = useState(false);

  const [baseData, setBaseData] = useState<PathData[]>([]);
  const router = useRouter();

  const [currentPath, setCurrentPath] = useState<PathData>({
    overall_diff: 0,
    overall_pred_diff: 0,
    overall_finalists: 0,
    overall_sectors: [],
    overall_breakdown: [],
    nodes: [],
    classifier: 'Fair Difficulty'
  });

  const [baseCurrentPath, setBaseCurrentPath] = useState<StaticPath>({
    overall_diff: 0,
    overall_pred_diff: 0,
    overall_finalists: 0,
    overall_sectors: [] as string[],
    overall_breakdown: [] as number[],
  })

  

  useEffect(() => {
    //TODO, remove hardcoded value
    const inp_data = true;

    if (inp_data && fairData) {
          const baseDataCopy = [];

          for (const dp of fairData) {
            var parsedRes: PathData = {
              overall_diff: dp.overall_diff,
              overall_pred_diff: dp.overall_pred_diff,
              overall_breakdown: dp.overall_breakdown,
              overall_finalists: dp.overall_finalists,
              overall_sectors: dp.overall_sectors,
              nodes: [],
              classifier: 'Total Path Difficulty',
            };


            for (const d of dp.fair_data) {
              var tfnp: FairNodeProps = {
                title: d.name,
                code: d.code,
                contact: d.contact_name,
                email: d.email,
                website: d.website,
                isStart: false,
                classifier: 'Fair Difficulty'
              };

              var tfd: FairData = {
                node: tfnp,
                num_finalists: d.num_finalists,
                pred_diff: d.pred_diff,
                diff: d.diff,
                sectors: d.sectors,
                breakdown: d.breakdown,
                handleHover: () => console.log('hi'),
                handleClick: () => console.log('hi'),
              };

              parsedRes.nodes.push(tfd);
            }

            baseDataCopy.push(parsedRes);
          }

          setPathChange(true);
          // setIsActive(true);
          // showPathways();
          // setBaseData(baseDataCopy);
          if (baseDataCopy.length > 1)
            setCurrentPath(baseDataCopy[1])
          else
            setCurrentPath(baseDataCopy[0])
          
    } else if (fairData == null && inp_data) {
        // const { county, state } = inp_data;
        // router.push(`/?county=${county}&state=${state}`);
    }

    console.log(inp_data)
}, [userInput, fairData]);

  useEffect(() => {
    if (currentPath.overall_diff !== 0 && pathChange) {
      setBaseCurrentPath({
        overall_diff: currentPath.overall_diff,
        overall_pred_diff: currentPath.overall_pred_diff,
        overall_finalists: currentPath.overall_finalists,
        overall_sectors: currentPath.overall_sectors,
        overall_breakdown: currentPath.overall_breakdown,
      })
      setPathChange(false)

    } else if (currentPath.overall_diff == 0) {} else {}

  }, [currentPath]);

  return <main className='min-h-[90%] max-h-[90%] w-full bg-[#090711] flex flex-col items-center relative z-[50]'>
    <div className='w-4/5 px-10 overflow-y-auto'>
    <div className='w-full text-center text-5xl text-white py-6 text-semibold col-span-2'>
      Your Pathway
    </div>
      <div className='grid w-full grid-cols-2 gap-x-4 h-full'>
        <div className='w-full py-6 px-2 flex flex-col gap-y-4'>
          {currentPath.nodes.map((fairNode, index) => (
            <FairNode key={index} {...fairNode} />
          ))}

          <div className="text-xl font-bold text-ghostWhite">
            FINALISTS
          </div>
          <StatComponent _key={'2023'} value={baseCurrentPath.overall_finalists} />

          <div className="text-xl font-bold text-ghostWhite">
            SCORES
          </div>
          <StatComponent _key={'2023'} value={baseCurrentPath.overall_diff} />
          <StatComponent _key={'2024'} value={baseCurrentPath.overall_pred_diff} header={'(ML Enhanced Prediction)'} />
        </div>
        <div className='w-full h-[80%] flex-col flex items-center py-6 gap-y-4 max-h-[80%]'>
            <div className='text-2xl text-ghostWhite'>
              Submission Sectors
            </div>
            <ChartComponent
              label_list={baseCurrentPath.overall_sectors}
              breakdown={baseCurrentPath.overall_breakdown}
            />
            <Menu 
              label_list={baseCurrentPath.overall_sectors}
              breakdown={baseCurrentPath.overall_breakdown}
            />
        </div>
      </div>
    </div>


  </main>
}