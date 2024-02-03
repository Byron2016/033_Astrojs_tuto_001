import {type Doc, type APISpaceXResponse} from "../types/api"


  // const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
  //   method:"POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     query:{},
  //     options: {
  //       sort: {
  //         date_unix: "desc"
  //       },
  //       pagination: false,
  //     }
  //   })
  // })
  // const data = await res.json()
  // //console.log(data)
  // //const {docs: launches} = await res.json() as APISpaceXResponse
  // const {docs: launches} = data as APISpaceXResponse
  // //console.log(launches)
export const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query:{},
      options: {
        sort: {
          date_unix: "asc"
        },
        limit:12,
      }
    })
  })
  const {docs: launches} = (await res.json()) as APISpaceXResponse

  return launches
}

export const getLauncheById = async ({id}: {id:string}) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
  
  const launch = (await res.json()) as Doc

  //console.log(launch)

  return launch
}


