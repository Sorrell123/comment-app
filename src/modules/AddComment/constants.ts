export interface Errors {
  username?: string;
  email?: string;
  textarea?: string;
}

export interface FormValues {
  username?: string;
  email?: string;
  textarea?: string;
}

export interface AddCommentFormProps {
  createNewComment: (comment: FormValues) => void;
  setComentCreated: (isCommentCreated: boolean) => void;
}