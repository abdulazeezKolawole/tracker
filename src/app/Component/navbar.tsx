import info from '../../../public/info.svg'
const Navbar = () => {
    return (
      <>
        <div className="container flex bg-amber-50 text-black mx-auto py-5 justify-between">
          <div className="header-name flex-1 flex justify-between">
            <h1>Bug Tracker</h1>
            <span>
                <img src={info} alt='info' height={20} width={20}/>
                <p>Info</p>
                </span>
          </div>
          <div className="flex-3 flex items-center">
            <button>Reload</button>
            <p>Invite</p>
            <p>Activity</p>
            <p>Last Seen</p>
            <button>Add to board</button>
          </div>
        </div>
      </>
    );
  };
  
  export default Navbar;
  