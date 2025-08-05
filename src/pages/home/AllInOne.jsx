import { IconInvoice } from "../../shared/components/IconInvoice";
import { IconCommunity } from "../../shared/components/IconCommunity";
import { IconCalendarOrange } from "../../shared/components/IconCalendarOrange";


export const AllInOne = () => {
  return (
    <section className="all-in-one">
      <div className="container mi">
        <div className="all-in-one-container">
          <h2 className="title-color all-in-one__title">All-In-One <span className="title-decor-color">Cloud Software.</span></h2>
          <p className="desc all-in-one__desc">Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
          <div className="all-in-one__list">
            <div className="all-in-one__list-item">
              <div className="item-icon item-icon-blue">
                <IconInvoice className="icon-invoice" />
              </div>
              <h3 className="title-color item-title">Online Billing, Invoicing, & Contracts</h3>
              <p className="desc item-desc">Simple and secure control of your organization`s financial and legal transactions. Send customized invoices and contracts</p>
            </div>
            <div className="all-in-one__list-item">
              <div className="item-icon item-icon-orange">
                <IconCalendarOrange className="icon-calendar" />
              </div>
              <div className="title-color item-title">Easy Scheduling & Attendance Tracking</div>
              <div className="desc item-desc">Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</div>
            </div>
            <div className="all-in-one__list-item">
              <div className="item-icon item-icon-lightblue">
                <IconCommunity className="icon-community" />
              </div>
              <div className="title-color item-title">Customer Tracking</div>
              <div className="desc item-desc">Automate and track emails to individuals or groups. Skilline`s built-in system helps organize your organization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
