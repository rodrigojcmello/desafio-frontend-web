const MaterialSymbol = ({ symbol }: { symbol: string }) => (
  <span className={'material-symbols-outlined'}>{symbol}</span>
);

export const BackIcon = () => <MaterialSymbol symbol={'arrow_back'} />;
export const DeleteIcon = () => <MaterialSymbol symbol={'delete'} />;
export const EditIcon = () => <MaterialSymbol symbol={'edit'} />;
export const SaveIcon = () => <MaterialSymbol symbol={'save'} />;
export const AddIcon = () => <MaterialSymbol symbol={'add'} />;
