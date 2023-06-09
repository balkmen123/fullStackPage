// import HeaderLearning from '~/components/HeaderLearding/HeaderLearning';
import HeaderLearning from '../HeaderLearding/HeaderLearning';
import ItemLearning from '../ItemLearning';

function ScrolListVertical({ newLean, headerLearn, more, data }) {
  console.log('data---', data);
  return (
    <>
      <HeaderLearning more={more} text={headerLearn} newLeaning={newLean}></HeaderLearning>
      <div className="item-khoahoc grid grid-cols-4 gap-10 mt-[20px]">
        {data?.map((data) => {
          return <ItemLearning data={data}></ItemLearning>;
        })}
      </div>
    </>
  );
}

export default ScrolListVertical;
