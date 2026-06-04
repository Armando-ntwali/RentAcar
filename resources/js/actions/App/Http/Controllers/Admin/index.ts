import CarsController from './CarsController'
import ReservationsController from './ReservationsController'
import PickupInspectionController from './PickupInspectionController'
import ReturnInspectionController from './ReturnInspectionController'
import DamageReportController from './DamageReportController'
import VehicleOperationsController from './VehicleOperationsController'
import DisputeController from './DisputeController'
import ClientsController from './ClientsController'
import UsersController from './UsersController'
import PaymentsController from './PaymentsController'
import ReportsController from './ReportsController'
import SupportController from './SupportController'
const Admin = {
    CarsController: Object.assign(CarsController, CarsController),
ReservationsController: Object.assign(ReservationsController, ReservationsController),
PickupInspectionController: Object.assign(PickupInspectionController, PickupInspectionController),
ReturnInspectionController: Object.assign(ReturnInspectionController, ReturnInspectionController),
DamageReportController: Object.assign(DamageReportController, DamageReportController),
VehicleOperationsController: Object.assign(VehicleOperationsController, VehicleOperationsController),
DisputeController: Object.assign(DisputeController, DisputeController),
ClientsController: Object.assign(ClientsController, ClientsController),
UsersController: Object.assign(UsersController, UsersController),
PaymentsController: Object.assign(PaymentsController, PaymentsController),
ReportsController: Object.assign(ReportsController, ReportsController),
SupportController: Object.assign(SupportController, SupportController),
}

export default Admin