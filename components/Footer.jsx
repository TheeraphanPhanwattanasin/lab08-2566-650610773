export const Footer = (props) => {
  return (
    <div>
      <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © {props.year} {props.fullName} {props.studentId}
        </p>
      </div>
    </div>
  );
};
