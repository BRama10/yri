import ClientPage from './clientpage';
import FindAFair from './findafair';

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const countyDataUrl = 'https://pathways-backend-git-main-hunter-ss-projects.vercel.app/encrypt_get_county_names';
  const countyDataResponse = await fetch(countyDataUrl);
  const countyData = await countyDataResponse.json();

  let fairData: any | null = null;

  if (searchParams.county && searchParams.state) {
    const fairDataUrl = `https://pathways-backend-git-main-hunter-ss-projects.vercel.app/encrypt_get_fair_list/${searchParams.county}/${searchParams.state}/`;
    const fairDataResponse = await fetch(fairDataUrl);
    fairData = await fairDataResponse.json();
    console.log(fairData);
  }



  return <>
    {fairData ?
      <FindAFair countyData={countyData} fairData={fairData} />
      :
      <ClientPage countyData={countyData} fairData={fairData} />}
  </>;
}