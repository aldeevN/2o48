"use client"
import { useState } from "react"
import Score from "../components/gameLogic/score"
import Board from "../components/gameLogic/board";
import GameProvider from "../context/game-context";

import User from "../components/user/user"
import LeaderBoard from "../components/leaderBoard/leaderBoard"
import Setting from "../components/setting/setting"
import Logout from "../components/authcomponent/logout"




import { Modal, ModalContent, Button, ModalBody, useDisclosure} from "@nextui-org/react"
import exit from "../../img/exit.svg"
import UserAvatar from "../components/UserAvatar";
import style from "../styles/burger-menu.module.css"

export default function Page() {
    const [backdrop, setBackdrop] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure();
    const backdrops = ["LeaderBoard", "Setting","User", "Logout"];
    
    
 const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
}
    return ( 
        <GameProvider>
            <div style={{ backdropFilter: `${isOpen ? "blur(10px)" : "blur(0)"}` }} >
                <div className={style.burgerMenu}>
                <UserAvatar />
                {backdrops.map((b) => (
                    <Button className={style.burgerBtn}
                        src={exit}
                        onPress={() => handleOpen(b)
                        }
                    >
                    </Button>
                ))}</div>
                
                <Score/>
                <Board />
            </div>
            <Modal 
                className={style.modal}
                isOpen={isOpen}
                onClose={onClose}
                hideCloseButton={true}
                scrollBehavior='outside' radius="none"  >
                <ModalContent 

                style={{ margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                    width: "900px",
                    height: '904px',
                    transform: 'translate(0, -86%)',
                    border: 'none',
                    }}>
                
                {(onClose) => (<ModalBody style={{backdropFilter: "blur(10px)"} }>
                <div >
                        {(() => {
                            switch (backdrop) {
                                case "LeaderBoard": return <LeaderBoard onClose={onClose} />;
                                case "Setting": return <Setting onClose={onClose}/>;
                                case "User": return <User onClose={onClose} />
                                case "Logout": return <Logout onClose={onClose}/>
                                default: return <></>;
                            }
                        })()}
                </div>
                    </ModalBody>
                    )}
                </ModalContent>
            </Modal>
        </GameProvider>
    )
}
