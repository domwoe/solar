### Basic System

The simplest system would entail the following components:
* Solar panel
* Voltage-regulator
* Kill-switch
* Embedded Linux computer running some light client 
* USB ports
* Smartphone application

Notably, in this basic setup. The system does not have an immediate connection to the Internet and to the blockchain (i.e. the global peer to peer network that maintains the distributed ledger). The proof of payment has to be augmented by the smartphone application. 

We consider the embedded Linux computer as a trusted computing environment running verified open source software. The computer should have a real time clock


### Basic Smart Contract

Identify solar home system as an Ethereum contract account.

Lease to own model:

System cost: c
Payment time in days: t

Daily payments: c/t


```javascript

contract LeaseToOwn {
	
	address public leaser;

	uint public paid;

	event Payment( uint amount )

	event Paid()

	modifier onlyOwner() {
		
		if ( msg.sender != owner ) throw;

	}

	function LeaseToOwn( unit price, uint period, address owner, address leaser) {

		owner = owner;
		leaser = leaser;

		price = price;
		period = period;

		daylyPayment = price / period;

		toPay = price;


	}

	function pay() {

		toPay -= msg.value;

		if ( toPay <= 0 )

			if ( toPay < 0 ) // sender paid to much

				owner.send( msg.value + toPay );
				msg.sender.send( -toPay );

			owner = leaser;

			Paid()

		else

			owner.send( msg.value );


		Payment( msg.value )


	}


}


‘‘‘


