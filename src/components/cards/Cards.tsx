import './cards.scss'
import cardUser from '../../components/images/cardUser.svg'
import cardActiveUser from '../../components/images/cardActive.svg'
import cardLoanUser from '../../components/images/cardLoan.svg'
import cardSaveUser from '../../components/images/cardSave.svg'

const Cards = () => {
  return (
    <div className='cards-container'>
      <div className='cards-content-container'>

        <div className='cards-content'>
          <div className='cards-content-sub-div'>
          <img src={cardUser} className='cards-content-icon'/>
          <p className='cards-content-txt'>USERS</p>
          <p className='cards-content-num'>2,453</p>
          </div>  
        </div>

        <div className='cards-content'>
          <div className='cards-content-sub-div'>
          <img src={cardActiveUser} className='cards-content-icon'/>
          <p className='cards-content-txt'>ACTIVE USERS</p>
          <p className='cards-content-num'>2,453</p>
          </div>  
        </div>

        <div className='cards-content'>
          <div className='cards-content-sub-div'>
          <img src={cardLoanUser} className='cards-content-icon'/>
          <p className='cards-content-txt'>USERS WITH LOANS</p>
          <p className='cards-content-num'>12,453</p>
          </div>  
        </div>

        <div className='cards-content'>
          <div className='cards-content-sub-div'>
          <img src={cardSaveUser} className='cards-content-icon'/>
          <p className='cards-content-txt'>USERS WITH SAVINGS</p>
          <p className='cards-content-num'>102,453</p>
          </div>  
        </div>

      </div> 
    </div>
  )
}

export default Cards




