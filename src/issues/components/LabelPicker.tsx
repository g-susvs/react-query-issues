import { LoadingIcon } from "../../shared/components/LoadingIcon"
import { useLabels } from "../hooks/useLabels"
import { FC } from 'react';

interface Props {
  selectedLabel: string[],
  onChange: (name: string) => void
}


export const LabelPicker: FC<Props> = ({ selectedLabel, onChange }) => {

  const labelsQuery = useLabels()

  if (labelsQuery.isLoading) return (<LoadingIcon />)

  return (
    <>
      {
        labelsQuery.data?.map((label) => {
          return (
            <span
              key={label.id}
              className={`badge rounded-pill m-1 label-picker ${selectedLabel.includes(label.name) ? 'active-label' : ''}`}
              style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
              onClick={() => onChange(label.name)}
            >
              {label.name}
            </span>
          )
        })
      }


    </>
  )
}
