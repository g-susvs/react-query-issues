import { useQuery } from "@tanstack/react-query"
import { Issue } from "../interfaces/issue"
import { githubApi } from "../../api/githubApi"

const getIssues = async (): Promise<Issue[]> => {
    const { data } = await githubApi.get<Issue[]>('/issues')
    console.log(data)
    return data
}

export const useIssues = () => {

    const issuesQuery = useQuery(
        ['issues'],
        getIssues
    )

    return {
        issuesQuery
    }
}
