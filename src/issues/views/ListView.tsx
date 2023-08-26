import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks/useIssues';
import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { State } from '../interfaces';


export const ListView = () => {

  const [state, setstate] = useState<State>()
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const { issuesQuery, page, prevPage, nextPage } = useIssues({ state, labels: selectedLabels })

  const onLabelChanged = (labelName: string) => {

    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter(label => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName])
  }

  return (
    <div className="row mt-5">

      <div className="col-8">
        {
          issuesQuery.isLoading
            ? (<LoadingIcon />)
            : (<IssueList state={state} onStateChanged={setstate} issues={issuesQuery.data || []} />)
        }
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            disabled={(page === 1 || issuesQuery.isFetching) ? true : false}
            className="btn btn-outline-primary"
            onClick={prevPage}
          >Prev</button>
          <span>{page}</span>
          <button
            disabled={issuesQuery.isFetching}
            className="btn btn-outline-primary"
            onClick={nextPage}
          >Next</button>
        </div>
      </div>

      <div className="col-4">
        <LabelPicker selectedLabel={selectedLabels} onChange={onLabelChanged} />
      </div>
    </div>
  )
}
