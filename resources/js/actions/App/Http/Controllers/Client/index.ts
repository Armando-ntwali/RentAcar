import ReservationsController from './ReservationsController'
import SupportController from './SupportController'
import DamageReportController from './DamageReportController'
import DisputeController from './DisputeController'
const Client = {
    ReservationsController: Object.assign(ReservationsController, ReservationsController),
SupportController: Object.assign(SupportController, SupportController),
DamageReportController: Object.assign(DamageReportController, DamageReportController),
DisputeController: Object.assign(DisputeController, DisputeController),
}

export default Client